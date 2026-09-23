import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  status: 'received' | 'queued_for_delivery';
  recipient: string;
}

// In-memory persistent queue for contact inquiries
const submissions: ContactSubmission[] = [];

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, 'public')));

  // Contact API endpoint
  app.post('/api/contact', (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, and message are required.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email).trim())) {
      return res.status(400).json({
        error: 'Invalid email address provided.',
      });
    }

    const newSubmission: ContactSubmission = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: String(name).trim().slice(0, 100),
      email: String(email).trim().slice(0, 150),
      subject: String(subject || 'Portfolio Inquiry via thatsakki.dev').trim().slice(0, 200),
      message: String(message).trim().slice(0, 3000),
      created_at: new Date().toISOString(),
      status: 'received',
      recipient: 'kavarakshar007@gmail.com',
    };

    submissions.unshift(newSubmission);

    console.log(
      `[Contact API] Message recorded from "${newSubmission.name}" <${newSubmission.email}> for <${newSubmission.recipient}> with subject: "${newSubmission.subject}"`,
    );

    return res.status(200).json({
      success: true,
      message: 'Message received. Thanks for reaching out.',
      submissionId: newSubmission.id,
      created_at: newSubmission.created_at,
    });
  });

  // Health and Status endpoint
  app.get('/api/contact/health', (_req: Request, res: Response) => {
    res.json({
      status: 'online',
      activeRecipient: 'kavarakshar007@gmail.com',
      totalReceived: submissions.length,
      timestamp: new Date().toISOString(),
    });
  });

  if (!isProduction) {
    // Development mode: mount Vite middlewares
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: serve built static files from dist
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server listening at http://0.0.0.0:${PORT} (${isProduction ? 'production' : 'development'})`);
  });
}

startServer().catch((err) => {
  console.error('Fatal server startup error:', err);
  process.exit(1);
});
