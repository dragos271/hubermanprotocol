"use client";
import { useState } from "react";

export default function BodySystemDiagram() {
  return (
    <div style={{
      padding: '40px',
      background: 'rgba(15, 23, 42, 0.6)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h3 style={{ 
        color: 'var(--text)', 
        marginBottom: '32px',
        fontSize: '28px',
        fontWeight: '700',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.02em'
      }}>
        Protocol Impact on Body Systems
      </h3>
      
      <p style={{ 
        textAlign: 'center', 
        color: 'rgba(255, 255, 255, 0.6)', 
        fontSize: '16px',
        fontWeight: '500'
      }}>
        Component loaded successfully!
      </p>
    </div>
  );
}
