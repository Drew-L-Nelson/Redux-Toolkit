import React from 'react';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path='post' >
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
        </Route>

      </Route>
    </Routes>
  );
}

//import Counter from './features/counter/Counter';
