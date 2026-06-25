import { useState } from 'react';
import { T } from '../../tokens';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle');
  const [fields, setFields] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        ...fields,
      }).toString();
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    background: T.white,
    border: `3px solid ${T.ink}`,
    padding: '12px 13px',
    fontFamily: "'Archivo', sans-serif",
    fontSize: 15,
    color: T.ink,
    outline: 'none',
  };

  const boxStyle: React.CSSProperties = {
    flex: '1 1 320px',
    minWidth: 0,
    background: T.sand,
    border: `3px solid ${T.ink}`,
    boxShadow: `7px 7px 0 ${T.ink}`,
    padding: 'clamp(20px,3vw,28px)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  };

  if (status === 'sent') {
    return (
      <div style={{ ...boxStyle, alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 14,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Message sent! I'll reply within a day.
        </div>
      </div>
    );
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Space Mono', monospace",
    fontSize: 10.5,
    fontWeight: 700,
    letterSpacing: 1.5,
    marginBottom: 7,
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      style={boxStyle}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      <div>
        <div style={labelStyle}>NAME</div>
        <input
          type="text"
          name="name"
          placeholder="Jane Doe"
          required
          value={fields.name}
          onChange={handleChange}
          className="form-input"
          style={inputStyle}
        />
      </div>
      <div>
        <div style={labelStyle}>EMAIL</div>
        <input
          type="email"
          name="email"
          placeholder="jane@company.com"
          required
          value={fields.email}
          onChange={handleChange}
          className="form-input"
          style={inputStyle}
        />
      </div>
      <div>
        <div style={labelStyle}>MESSAGE</div>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell me about the role…"
          required
          value={fields.message}
          onChange={handleChange}
          className="form-input"
          style={{ ...inputStyle, resize: 'none' }}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-send"
        style={{
          alignSelf: 'flex-start',
          background: T.ink,
          color: T.sand,
          border: `3px solid ${T.ink}`,
          boxShadow: `4px 4px 0 ${T.pink}`,
          padding: '14px 28px',
          fontFamily: "'Space Mono', monospace",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: 1.5,
          cursor: status === 'sending' ? 'wait' : 'pointer',
        }}
      >
        {status === 'sending' ? 'SENDING…' : status === 'error' ? 'RETRY →' : 'SEND →'}
      </button>
      {status === 'error' && (
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            color: T.errorRed,
          }}
        >
          Something went wrong. Try again.
        </div>
      )}
    </form>
  );
}
