import { useEffect, useState } from 'react'

export default function Gallery() {
    const [emojis, setEmojis] = useState([])

    useEffect(() => {
        const icons = ['🌸', '🌈', '⭐', '💫', '🌿', '🪩', '🌻', '☁️', '🌙']
        const newEmojis = icons.map((emoji, i) => ({
            id: i,
            emoji,
            top: Math.random() * 80 + '%',
            left: Math.random() * 80 + '%',
            duration: 6 + Math.random() * 6,
        }))
        setEmojis(newEmojis)
    }, [])

    return (
        <section className="floating-container">
            <h1>Floating Moods</h1>
            <p>These emojis float across the screen!</p>

            <div className="emoji-area">
                {emojis.map(e => (
                    <span
                        key={e.id}
                        className="floating"
                        style={{
                            top: e.top,
                            left: e.left,
                            animationDuration: `${e.duration}s`,
                        }}
                    >
            {e.emoji}
          </span>
                ))}
            </div>
        </section>
    )
}
