
import { AIChat } from "@/components/chatbot/ai-chat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Chatbot() {
  const recentQuestions = [
    "How can I break through my weight loss plateau?",
    "What's the best way to build lean muscle?",
    "How many calories should I eat to lose weight?",
    "What exercises should I do for lower back pain?",
    "How can I improve my running endurance?",
    "What should I eat before and after workouts?",
  ];
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Fitness Coach</h1>
          <p className="text-muted-foreground">
            Get personalized advice from your AI fitness assistant
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <AIChat />
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Popular Questions</CardTitle>
              <CardDescription>
                Ask the AI coach about these topics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recentQuestions.map((question, index) => (
                  <li key={index} className="cursor-pointer hover:text-fitness-primary transition-colors">
                    <span className="flex items-center">
                      <span className="mr-2">→</span>
                      <span>{question}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>About the AI Coach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                Your AI Fitness Coach is trained on the latest fitness research and can provide 
                personalized advice on various topics:
              </p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>Workout routines and exercise form</li>
                <li>Nutrition and diet plans</li>
                <li>Weight loss strategies</li>
                <li>Muscle building techniques</li>
                <li>Recovery and injury prevention</li>
                <li>Goal setting and motivation</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                While the AI provides helpful advice, always consult with health professionals 
                for medical concerns.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
