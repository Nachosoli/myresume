import { NextRequest, NextResponse } from "next/server";
import { profile } from "@/src/content/profile";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Mock responses based on common queries
    const lowerMessage = message.toLowerCase();

    let response = "";

    if (lowerMessage.includes("experience") || lowerMessage.includes("background")) {
      response = `${profile.name} has over two decades of experience in Quality Engineering, currently serving as ${profile.title}. They have led global QA organizations of 40+ engineers and specialize in AI-first QA transformation, automation strategy, and engineering-driven quality systems.`;
    } else if (lowerMessage.includes("current") || lowerMessage.includes("role") || lowerMessage.includes("job")) {
      response = `${profile.name} is currently the QA Director at Newfold Digital, leading a distributed Quality Assurance organization of 40 engineers across the US, Argentina, and India, reporting directly to the CTO.`;
    } else if (lowerMessage.includes("skills") || lowerMessage.includes("expertise") || lowerMessage.includes("technologies")) {
      response = `${profile.name} specializes in: Global QA leadership, Quality organization design, Test automation (Selenium, TestNG, Protractor, REST Assured), CI/CD quality gates, Metrics-driven decision making, and Agile/Waterfall methodologies.`;
    } else if (lowerMessage.includes("projects") || lowerMessage.includes("building") || lowerMessage.includes("ventures")) {
      response = `${profile.name} is working on parallel projects including CourtBuddy (a tennis matchmaking platform) and QA Shift Left (an initiative focused on redefining Quality Assurance as an AI-first, engineering-driven discipline).`;
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("reach")) {
      response = `You can reach ${profile.name} at ${profile.contact.email} or ${profile.contact.phone}. They are located in ${profile.contact.location}.`;
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      response = `Hello! I'm an AI assistant trained on ${profile.name}'s background. I can help you learn about their experience, skills, projects, or how to get in touch. What would you like to know?`;
    } else {
      response = `I understand you're asking about "${message}". ${profile.name} is a ${profile.title} with extensive experience in quality engineering and AI-first transformation. Would you like to know more about their experience, skills, projects, or how to contact them?`;
    }

    return NextResponse.json({
      response,
      message: response, // Some endpoints may use 'message' instead of 'response'
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

