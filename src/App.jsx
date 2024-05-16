import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div className="card">
	<div className="card-page cart-page-front">
		<div className="card-page cart-page-outside"></div>
		<div className="card-page cart-page-inside">
			<div className="card-page-head">
				<img src="https://i.imgur.com/BMgUaEl.png" />
			</div>
			<span className="happy-bday">
      {/* <div style={{ display: 'block', alignSelf: 'center', justifySelf: 'center' }}>
      <img src="https://sun9-24.userapi.com/impg/ERGrFsh94nXzoW1t5Bee6LINTP4MUb7KwGNBzQ/pk6s9ZsXXKg.jpg?size=719x719&quality=96&proxy=1&sign=97a5a2eda89eca376e98f080ac63b06a&type=album" />
			</div> */}
			</span>
		</div>
	</div>
	<div className="card-page cart-page-bottom">
		<p><b>С днём рождения, Милана!</b><i>Искренне желаем стабильности, головокружительного успеха, невероятных проектов, креативных идей, крутых достижений, уверенности, настойчивости и достойных побед!</i></p>
	</div>
</div>
<span className="click-icon">
	<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
		<path fill="#fff" d="M31.6 17.7V26c0 1.9-.7 3.7-2 5.1v.9c0 1.6-1.3 3-3 3h-8.4c-1.6 0-3-1.3-3-3 0-.6.5-1 1-1s1 .4 1 1c0 .5.4 1 1 1h8.4c.5 0 1-.4 1-1v-1.2-.3-.1c0-.1.1-.2.2-.3 1.1-1.1 1.7-2.5 1.7-4v-8.3c0-.3-.1-.5-.3-.7-.1-.1-.5-.4-1-.3-.4.1-.8.6-.8 1.1v2.4c0 .6-.5 1-1 1s-1-.4-1-1v-5.5c0-.3-.1-.5-.3-.7s-.4-.3-.7-.3c-.5 0-1 .5-1 1v5.5c0 .6-.5 1-1 1s-1-.4-1-1v-8.5c0-.3-.1-.5-.3-.7s-.4-.3-.7-.3c-.5 0-1 .5-1 1v8.5c0 .6-.5 1-1 1s-1-.4-1-1V7.7c0-.3-.1-.5-.3-.7-.1-.1-.5-.4-1-.3-.4.1-.8.6-.8 1.1V20c0 .4-.2.8-.6.9-.4.2-.8.1-1.1-.2L11 18.1c-.6-.6-1.6-.6-2.2.1-.5.6-.4 1.5.2 2.1l7 7c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3l-7-7.1c-1.3-1.3-1.5-3.5-.3-4.8C8 16 9 15.5 10 15.5c.9 0 1.8.4 2.5 1l.9.9V7.9c0-1.4.9-2.7 2.3-3 1-.3 2.1 0 2.8.8.6.6.9 1.3.9 2.1V9c.3-.1.7-.2 1-.2.8 0 1.5.3 2.1.9s.9 1.3.9 2.1v.2c.3-.1.7-.2 1-.2.8 0 1.5.3 2.1.9s.9 1.3.9 2.1v.2c.1 0 .2-.1.3-.1 1-.3 2.1 0 2.8.8.8.5 1.1 1.3 1.1 2z" />
	</svg>
</span>


    </>
  )
}

export default App
