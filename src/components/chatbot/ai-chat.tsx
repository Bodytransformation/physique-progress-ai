
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-message",
      content: "Hello! I'm your AI fitness coach. How can I help you today with your fitness journey?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Mock AI response with some fitness advice
      // In a real implementation, this would call an AI API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Sample responses based on keywords in the user's message
      const userMessageLower = input.toLowerCase();
      let aiResponse = "";
      
      if (userMessageLower.includes("weight loss") || userMessageLower.includes("lose weight")) {
        aiResponse = "For sustainable weight loss, focus on creating a small caloric deficit (about 500 calories per day), combining cardio and strength training, and ensuring adequate protein intake. Consistency is key!";
      } else if (userMessageLower.includes("muscle") || userMessageLower.includes("strength")) {
        aiResponse = "To build muscle effectively, prioritize progressive overload in your training (gradually increasing weight/reps), consume sufficient protein (1.6-2.2g per kg of body weight), and ensure adequate recovery between workouts.";
      } else if (userMessageLower.includes("diet") || userMessageLower.includes("nutrition")) {
        aiResponse = "A balanced diet should include plenty of whole foods, adequate protein, complex carbohydrates, healthy fats, and micronutrients from fruits and vegetables. Consider tracking your intake for a few weeks to identify areas for improvement.";
      } else if (userMessageLower.includes("cardio") || userMessageLower.includes("running")) {
        aiResponse = "For effective cardio training, mix high-intensity interval training (HIIT) with lower-intensity steady-state sessions. Aim for 150-300 minutes of moderate activity per week, based on your goals.";
      } else if (userMessageLower.includes("plateau") || userMessageLower.includes("stuck")) {
        aiResponse = "Plateaus are normal in any fitness journey. Try varying your workout routine, reassessing your caloric intake, ensuring adequate recovery, or implementing progressive overload to break through.";
      } else {
        aiResponse = "That's a great question about your fitness journey. For the best results, focus on consistency with your workouts, proper nutrition tailored to your goals, and adequate recovery. Would you like more specific advice on any particular aspect of your training?";
      }

      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        content: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>AI Fitness Coach</CardTitle>
        <CardDescription>Get personalized fitness advice and motivation</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-[calc(600px-6.5rem-4rem)] px-4" ref={scrollAreaRef}>
          <div className="space-y-4 pt-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex max-w-[80%] ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className="h-8 w-8 m-2">
                    <div
                      className={`h-full w-full flex items-center justify-center rounded-full ${
                        message.sender === "user" 
                          ? "bg-fitness-primary text-white" 
                          : "bg-fitness-secondary text-white"
                      }`}
                    >
                      {message.sender === "user" ? "U" : "AI"}
                    </div>
                  </Avatar>
                  <div
                    className={`rounded-lg px-4 py-2 break-words ${
                      message.sender === "user"
                        ? "bg-fitness-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.content}
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex">
                  <Avatar className="h-8 w-8 m-2">
                    <div className="h-full w-full flex items-center justify-center rounded-full bg-fitness-secondary text-white">
                      AI
                    </div>
                  </Avatar>
                  <div className="rounded-lg px-4 py-2 bg-muted">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex w-full gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your fitness coach..."
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
