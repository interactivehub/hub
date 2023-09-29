import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"

const Home = () => {
  return (
    <div>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>Content</CardContent>
      </Card>
    </div>
  )
}

export default Home