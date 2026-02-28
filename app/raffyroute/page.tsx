import React from 'react'

export default function RaffyPage() {
  return (
    <div className="raffy-page">
      <h1>raffyb</h1>

      <div style={{ marginTop: 16 }}>
        <p>Sample image:</p>
        <img
          src="https://picsum.photos/600/300"
          alt="Sample"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: 6 }}
        />
      </div>

      <div style={{ marginTop: 16 }}>
        <p>Sample GIF:</p>
        <img
          src="https://imgs.search.brave.com/TTmL1zD6-8kvMnkTfe1TE8psPr2JirQ8wf2zJnifEbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvY2F0LWN1/dGUtY2F0LWdpZi1y/MzY4cTIzaDZmOHZk/NXg0LmdpZg.gif"
          alt="Sample GIF"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: 6 }}
        />
      </div>
    </div>
  )
}
