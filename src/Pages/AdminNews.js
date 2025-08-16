import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "secret123"; // change this

const AdminNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", body: "", type: "", image: "" });
  const [editingId, setEditingId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageValid, setImageValid] = useState(true);

  // 🔒 local auth state
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAdminAuthenticated") === "true"
  );
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const newsCollection = collection(db, "news");

  const fetchNews = async () => {
    try {
      const snapshot = await getDocs(newsCollection);
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNewsData(list);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchNews();
    }
  }, [isAuthenticated]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "image") setImageValid(true);
  };

  const openAddModal = () => {
    setForm({ title: "", description: "", body: "", type: "", image: "" });
    setEditingId(null);
    setImageValid(true);
    setModalOpen(true);
  };

  const openEditModal = news => {
    setForm({
      title: news.title,
      description: news.description,
      body: news.body,
      type: news.type,
      image: news.image
    });
    setEditingId(news.id);
    setImageValid(true);
    setModalOpen(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!imageValid) return;

    try {
      if (editingId) {
        await updateDoc(doc(db, "news", editingId), { ...form, date: serverTimestamp() });
      } else {
        await addDoc(newsCollection, { ...form, date: serverTimestamp() });
      }
      setModalOpen(false);
      fetchNews();
    } catch (err) {
      console.error("Error saving news:", err);
    }
  };

  const handleDelete = async id => {
    if (window.confirm("Are you sure you want to delete this news?")) {
      try {
        await deleteDoc(doc(db, "news", id));
        fetchNews();
      } catch (err) {
        console.error("Error deleting news:", err);
      }
    }
  };

  // 🔒 Simple login handler
  const handleLogin = e => {
    e.preventDefault();
    if (
      loginForm.username === ADMIN_USERNAME &&
      loginForm.password === ADMIN_PASSWORD
    ) {
      setIsAuthenticated(true);
      localStorage.setItem("isAdminAuthenticated", "true");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAdminAuthenticated");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
          {loginError && <p className="text-red-500 text-sm mb-2">{loginError}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded"
              value={loginForm.username}
              onChange={e => setLoginForm({ ...loginForm, username: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              value={loginForm.password}
              onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
              required
            />
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </div>
      </div>
    );
  }

  // 🔒 If authenticated, show admin dashboard
  return (
    <div className="pt-20 pb-20 max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Admin - Manage News</h2>
        <div className="flex gap-2">
          <Button onClick={openAddModal}>Add News</Button>
          <Button onClick={handleLogout} variant="destructive">Logout</Button>
        </div>
      </div>

      {/* News Grid */}
      {newsData.length === 0 ? (
        <p className="text-center text-gray-500">No news available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map(news => (
            <Card key={news.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <CardContent className="flex-1 flex flex-col">
                {news.image && (
                  <div className="w-full h-40 mb-4 overflow-hidden rounded-lg shadow-sm">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-teal-600 font-semibold">
                    {news.date ? new Date(news.date.seconds * 1000).toLocaleDateString() : ""}
                  </div>
                  <Badge variant="outline">{news.type || "General"}</Badge>
                </div>
                <h3 className="font-heading font-semibold text-xl text-slate-800 mb-2">{news.title}</h3>
                <p className="text-slate-600 flex-1">{news.description}</p>

                <div className="mt-4 flex gap-2">
                  <Button onClick={() => openEditModal(news)} variant="outline" size="sm">Edit</Button>
                  <Button onClick={() => handleDelete(news.id)} variant="destructive" size="sm">Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-lg p-6 relative">
            <h3 className="text-2xl font-bold mb-4">{editingId ? "Edit News" : "Add News"}</h3>

            {form.image && form.image.trim() !== "" && (
              <div className="w-full h-48 mb-2 overflow-hidden rounded-lg shadow-sm relative">
                <img
                  src={form.image}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={() => setImageValid(false)}
                  onLoad={() => setImageValid(true)}
                />
              </div>
            )}
            {!imageValid && (
              <p className="text-red-500 text-sm mb-2">Invalid image URL!</p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" required />
              <input type="text" name="description" placeholder="Short description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" required />
              <textarea name="body" placeholder="Full text / body" value={form.body} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="type" placeholder="Type (e.g., Announcement)" value={form.type} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="w-full p-2 border rounded" />

              <div className="flex justify-end gap-2 mt-4">
                <Button type="button" variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button type="submit" disabled={!imageValid}>{editingId ? "Update" : "Add"}</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNews;
