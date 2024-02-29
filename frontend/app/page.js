// pages/tweets.js
import React from 'react';
import Head from 'next/head';
async function fetchData() {
  const response = await fetch('http://127.0.0.1:8000/get',{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }});
  const data = await response.json();
  return data.data;
}
async function TweetsPage() {
  const tweets = await fetchData();
  console.log(tweets)

    return (
        <div>
          <Head>
            <title>Test Title</title>
          </Head>
            <h1>Tweets Attributes</h1>
            {
              tweets.length === 0 && <p>Loading...</p> 
            }
            <div>
              {tweets}
            </div>
        </div>
    );
}

export default TweetsPage;
