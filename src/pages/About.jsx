import { useState } from 'react'

export default function About() {
    const [answer, setAnswer] = useState('')
    const [result, setResult] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (answer === 'sunny') setResult('You’re bright and positive ☀️')
        else if (answer === 'rainy') setResult('You’re calm and thoughtful 🌧️')
        else if (answer === 'stormy') setResult('You’re bold and passionate ⚡')
        else setResult('Please choose one that fits your vibe!')
    }

    return (
        <section>
            <h1>About You</h1>
            <p>Which weather matches your personality?</p>

            <form onSubmit={handleSubmit}>
                <select value={answer} onChange={(e) => setAnswer(e.target.value)}>
                    <option value="">Choose one</option>
                    <option value="sunny">Sunny</option>
                    <option value="rainy">Rainy</option>
                    <option value="stormy">Stormy</option>
                </select>
                <button type="submit" className="btn">Submit</button>
            </form>

            {result && <p style={{ marginTop: '1rem' }}>{result}</p>}
        </section>
    )
}