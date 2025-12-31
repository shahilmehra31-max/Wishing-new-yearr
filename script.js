body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  font-family: 'Arial', sans-serif;
  color: white;
  overflow: hidden;
}

.page {
  display: none;
  text-align: center;
  padding: 50px 20px;
}

.page img {
  width: 80%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
}

#page0 { display: block; } /* First page visible initially */

button#nextBtn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 12px 20px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  background: #ff6b81;
  color: white;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
}

/* Floating Hearts Animation */
.heart {
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  transform: rotate(-45deg);
  animation: float 5s linear infinite;
}
.heart:before,
.heart:after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
}
.heart:before { top: -10px; left: 0; }
.heart:after { left: 10px; top: 0; }

@keyframes float {
  0% { transform: translateY(0) rotate(-45deg); opacity:1; }
  100% { transform: translateY(-600px) rotate(-45deg); opacity:0; }
      }
