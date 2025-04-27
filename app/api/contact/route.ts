import connectToDatabase from '@/lib/db';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

// Define the Mongoose schema
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2 },
    email: { type: String, required: true, trim: true, match: /.+\@.+\..+/ },
    subject: { type: String, required: true, trim: true, minlength: 5 },
    message: { type: String, required: true, trim: true, minlength: 10 },
  },
  { timestamps: true }
);

// Prevent model overwrite on hot reload
const Contact =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// Helper function for error responses
const sendErrorResponse = (statusCode: number, message: string) => {
  console.log(`Error Response: ${statusCode} - ${message}`);
  return NextResponse.json({ error: message }, { status: statusCode });
};

// Handle GET requests
export async function GET() {
  console.log('Handling GET request');
  return NextResponse.json({ message: 'API is working!' });
}

// Handle POST requests
export async function POST(req: NextRequest) {
  console.log('Handling POST request');

  try {
    console.log('Connecting to the database...');
    await connectToDatabase();
    console.log('Database connection successful');
  } catch (error) {
    console.error('Error connecting to database:', error);
    return sendErrorResponse(500, 'Failed to connect to the database.');
  }

  const body = await req.json();
  const { name, email, subject, message } = body;
  console.log('Request body:', body);

  // Validate input fields
  if (!name || !email || !subject || !message) {
    console.log('Validation failed: Missing fields');
    return sendErrorResponse(400, 'All fields are required.');
  }

  try {
    console.log('Saving contact data to the database...');
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    console.log('Contact data saved successfully');

    return NextResponse.json(
      { message: 'Form submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving contact:', error);
    return sendErrorResponse(500, 'Failed to save contact data.');
  }
}
