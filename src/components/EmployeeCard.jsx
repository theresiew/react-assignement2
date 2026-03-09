import React, { useRef } from 'react'
import { getInitials, getAvatarColor } from '../utils/helpers'

function EmployeeCard({ employee }) {
  const { id, name, email, phone, website, company } = employee
  const cardRef = useRef(null)
  const color = getAvatarColor(id)
  const initials = getInitials(name)

  const handleDownload = async () => {
    try {
      const html2canvas = (await import('html2canvas')).default
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#16161f',
        scale: 2,
        useCORS: true,
      })
      const link = document.createElement('a')
      link.download = `${name.replace(/\s+/g, '-').toLowerCase()}-card.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error('Download failed:', err)
    }
  }

  const handlePrint = () => {
    const printWindow = window.open('', '_blank')
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${name} — Employee Card</title>
          <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
          <style>
            body { margin: 40px; font-family: 'DM Sans', sans-serif; background: white; }
            .card { background: white; border: 1px solid #ddd; border-radius: 14px; padding: 28px; max-width: 360px; color: black; }
            .header { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px; }
            .avatar { width: 52px; height: 52px; border-radius: 12px; background: ${color}22; border: 2px solid ${color}; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700; color: ${color}; flex-shrink: 0; }
            .name { font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 700; color: #111; margin-bottom: 3px; }
            .company { font-size: 12px; font-weight: 500; color: ${color}; text-transform: uppercase; letter-spacing: 0.04em; }
            .divider { border: none; border-top: 1px solid #eee; margin: 16px 0; }
            .info-row { display: flex; gap: 10px; margin-bottom: 10px; font-size: 13px; }
            .label { color: #999; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 2px; }
            .value { color: #444; text-decoration: none; }
            .badge { background: #f3f3f3; color: #555; font-size: 11px; padding: 3px 8px; border-radius: 99px; margin-left: auto; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="avatar">${initials}</div>
              <div style="flex:1">
                <div class="name">${name}</div>
                <div class="company">${company.name}</div>
              </div>
              <span class="badge">#${String(id).padStart(2, '0')}</span>
            </div>
            <hr class="divider"/>
            <div class="info-row"><div><span class="label">Email</span><span class="value">${email}</span></div></div>
            <div class="info-row"><div><span class="label">Phone</span><span class="value">${phone}</span></div></div>
            <div class="info-row"><div><span class="label">Website</span><span class="value">${website}</span></div></div>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => { printWindow.print(); printWindow.close() }, 500)
  }

  return (
    <article
      ref={cardRef}
      className="bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#3d3d55] hover:bg-[#1c1c28] hover:shadow-2xl group relative overflow-hidden"
    >
      
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: color }}
      />

      <div className="flex items-start gap-4 mb-1">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}18`, border: `2px solid ${color}` }}
        >
          <span
            className="text-xl font-bold"
            style={{ color, fontFamily: 'Syne, sans-serif' }}
          >
            {initials}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h2
            className="text-[17px] font-bold text-[#f0f0f8] truncate leading-snug mb-1"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {name}
          </h2>
          <p
            className="text-xs font-medium uppercase tracking-wider truncate"
            style={{ color }}
          >
            {company.name}
          </p>
        </div>

        <span className="bg-[#0a0a0f] text-[#55556a] text-[11px] font-semibold px-2 py-1 rounded-md border border-[#2a2a3a] flex-shrink-0" style={{ fontFamily: 'Syne, sans-serif' }}>
          #{String(id).padStart(2, '0')}
        </span>
      </div>

      <div className="h-px bg-[#2a2a3a] my-4" />

      <div className="flex flex-col gap-3 flex-1">
        <div className="flex items-start gap-3">
          <span className="text-[#55556a] text-sm w-5 flex-shrink-0 mt-0.5">✉</span>
          <div className="min-w-0">
            <span className="block text-[10px] uppercase tracking-widest text-[#55556a] font-medium mb-0.5">Email</span>
            <a href={`mailto:${email}`} className="text-[13px] text-[#8888aa] hover:text-[#9d8ff9] transition-colors truncate block">{email}</a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-[#55556a] text-sm w-5 flex-shrink-0 mt-0.5">☏</span>
          <div className="min-w-0">
            <span className="block text-[10px] uppercase tracking-widest text-[#55556a] font-medium mb-0.5">Phone</span>
            <a href={`tel:${phone}`} className="text-[13px] text-[#8888aa] hover:text-[#9d8ff9] transition-colors truncate block">{phone}</a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-[#55556a] text-sm w-5 flex-shrink-0 mt-0.5">⊕</span>
          <div className="min-w-0">
            <span className="block text-[10px] uppercase tracking-widest text-[#55556a] font-medium mb-0.5">Website</span>
            <a href={`https://${website}`} target="_blank" rel="noreferrer" className="text-[13px] text-[#8888aa] hover:text-[#9d8ff9] transition-colors truncate block">{website}</a>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-5 pt-4 border-t border-[#2a2a3a]">
        <button
          onClick={handlePrint}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-medium text-[#8888aa] border border-[#2a2a3a] hover:bg-[#0a0a0f] hover:text-[#f0f0f8] hover:border-[#3d3d55] transition-all cursor-pointer"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          Print
        </button>

        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-medium text-white transition-all hover:opacity-85 hover:scale-[1.02] cursor-pointer"
          style={{ background: color }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download
        </button>
      </div>
    </article>
  )
}

export default EmployeeCard