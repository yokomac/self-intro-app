import React from 'react';

interface IntroductionProps {
  name: string;
  age: number;
  hobbies: string[];
}

const Introduction: React.FC<IntroductionProps> = ({ name, age, hobbies }) => {
  return (
    <div>
      <h1>自己紹介ページ</h1>
      <p>名前: {name}</p>
      <p>年齢: {age}</p>
      <p>趣味: {hobbies.join(', ')}</p>
    </div>
  );
};

export default Introduction;