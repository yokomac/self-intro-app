(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("express");var n=e.n(t);const r=require("react");var l=e.n(r);const a=require("react-dom/server"),o=({name:e,age:t,hobbies:n})=>l().createElement("div",null,l().createElement("h1",null,"自己紹介ページ"),l().createElement("p",null,"名前: ",e),l().createElement("p",null,"年齢: ",t),l().createElement("p",null,"趣味: ",n.join(", "))),c=require("react-bootstrap"),s=function(){const e={name:" Takuto Yokomaku",age:25,hobbies:["Reading","Coding","Traveling"]};return l().createElement(c.Container,{className:"mt-5"},l().createElement(c.Row,null,l().createElement(c.Col,null,l().createElement(c.Card,null,l().createElement(c.Card.Body,null,l().createElement(o,e),l().createElement(c.Button,{variant:"primary"},"Learn More"))))))},i=n()();i.get("/",((e,t)=>{const n=(0,a.renderToString)(l().createElement(s,null));t.send(`\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>SSR React App</title>\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">\n      </head>\n      <body>\n        <div id="root">${n}</div>\n        <script src="/dist/bundle.js"><\/script>\n      </body>\n    </html>\n  `)})),i.listen(9e3,(()=>{console.log("Server is running on http://localhost:9000")}))})();