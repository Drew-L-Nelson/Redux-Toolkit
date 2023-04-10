import React from 'react';
import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

export default function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}
