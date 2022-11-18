import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
      document.title = 'Home';
    }, []);
    
  return (
    <div id="App">
      <p>This test is about the best dog breeds for having a happy life. The first thing is an IQ test, which looks for a dog that has a deep and abiding love for humans. If your dog is completely enamored with you, then he will learn commands very quickly and behave very nicely.</p>
      <p>A dog that likes people is less likely to run away or bark a lot or even not come to you at all when you call. This test looks for a dog with a strong desire to please its person. Here is a test that looks for people who want a dog and make a dog happy. On this test, the best dog breeds for families are the Goldendoodle and Golden Retriever. The poodle is not a very nice dog.</p>
      <p>It is a toy poodle. If you go to some big city with a lot of rich people, you may see someone with a poodle on a leash. That dog is the saddest - looking dog I have ever seen. I would like to have a Goldendoodle, too, because a Goldendoodle is very smart. Plus, if my dog has a name, then we can play games to find out what his name is. My name is Nelson Shulkin, and my name is Greek for "bright" or "shining."</p>
      <img src={require("./Labi.png")} alt="Cute dog" />
    </div>
  );
}

export default App;