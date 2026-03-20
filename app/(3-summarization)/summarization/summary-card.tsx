import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, List, CheckCircle } from "lucide-react"

interface SummaryCardProps {
  headline: string
  context: string
  discussionPoints: string
  takeaways: string
}

export function SummaryCard({
  headline,
  context,
  discussionPoints,
  takeaways,
}: SummaryCardProps) {
  const formatAsList = (text: string) => {
    return text
      .split(/[\n,;]/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
  }

  const discussionList = formatAsList(discussionPoints)
  const takeawaysList = formatAsList(takeaways)

  return (
    <Card className="w-full max-w-2xl border border-border/50 bg-card shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
          {headline}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Context Section */}
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MessageSquare className="size-4" />
            <h3 className="text-sm font-medium uppercase tracking-wide">
              Context
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {context}
          </p>
        </section>

        {/* Discussion Points Section */}
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <List className="size-4" />
            <h3 className="text-sm font-medium uppercase tracking-wide">
              Discussion Points
            </h3>
          </div>
          <ul className="space-y-1.5 pl-1">
            {discussionList.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Takeaways Section */}
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="size-4" />
            <h3 className="text-sm font-medium uppercase tracking-wide">
              Key Takeaways
            </h3>
          </div>
          <ul className="space-y-1.5 pl-1">
            {takeawaysList.map((takeaway, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>
      </CardContent>
    </Card>
  )
}
