import "./App.css"
import EngagementMessagesOverTime from "./components/EngagementMessagesOverTime"

function App() {
  return (
    <div className="App">
      <div className="title">Mercle Assignment </div>
      <div className="highchart">
        <EngagementMessagesOverTime />
      </div>
    </div>
  )
}

export default App
