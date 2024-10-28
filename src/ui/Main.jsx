import { useSelector } from 'react-redux';
import { selectGroups, selectIndividuals } from '../components/features/leaderboardSlice';
import { selectWeakestTopic, selectStrongestTopics } from '../components/features/topicsSlice';
import BarChart from '../components/features/BarChart';

// TopicItem Component
const TopicItem = ({ topic }) => (
  <div className="flex w-full">
    <div className="w-[49px] h-[32px] rounded-md p-3 m-2">{/* Add Image if needed */}</div>
    <div className="flex flex-col">
      <p className="font-bold text-[14px] leading-5 text-black m-1">{topic.title}</p>
      <div className="w-[299px] rounded-2xl" style={{ backgroundColor: topic.color }}>
        <div
          className="rounded-full h-2"
          style={{
            width: `${topic.progress}%`,
            background: topic.gradient,
          }}
        ></div>
      </div>
    </div>
    <div className="flex items-end justify-end m-2 gap-2">
      <p className="font-semibold text-[14px] leading-4 text-black">{topic.progress}%</p>
      <p className="font-semibold text-[14px] leading-4 text-gray-500">Correct</p>
    </div>
  </div>
);


const activityData = [
  { name: 'January', value: 4000 },
  { name: 'February', value: 3000 },
  { name: 'March', value: 2000 },
  { name: 'April', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'June', value: 2390 },
  { name: 'July', value: 3490 },
  { name: 'August', value: 3200 },
  { name: 'September', value: 2100 },
  { name: 'October', value: 2800 },
  { name: 'November', value: 3000 },
  { name: 'December', value: 4000 },
];


// TopicsList Component
const TopicsList = ({ title, topics }) => (
  <div className="flex flex-col w-full p-4 border rounded-lg mt-4">
    <h2 className="font-medium text-gray-400 dark:text-gray-500">{title}</h2>
    {topics.length > 0 ? (
      topics.map((topic) => (
        <TopicItem key={topic.title} topic={topic} />
      ))
    ) : (
      <p className="text-gray-500">No topics available</p>
    )}
  </div>
);

// Main Component
const Main = () => {
  const groups = useSelector(selectGroups);
  const individuals = useSelector(selectIndividuals);
  const weakestTopic = useSelector(selectWeakestTopic);
  const strongestTopics = useSelector(selectStrongestTopics);
  const {
    activeUsers,
    questionsAnswered,
    avgSessionLength,
    startingKnowledge,
    currentKnowledge,
    knowledgeGain,
    activityData,
  } = useSelector((state) => state.dashboard);

  // Weakest topics
  const weakestTopics = [
    weakestTopic,
    { title: "Compliance Basics Procedures", progress: 52, color: "#f0f0f0", gradient: "linear-gradient(to right, #FF5722, #FF8A65)" },
    { title: "Company Networking", progress: 36, color: "#f0f0f0", gradient: "linear-gradient(to right, #FF9800, #FFC107)" },
     ].filter(Boolean); // Filters out any undefined values

  // Strongest topics
  const additionalStrongestTopics = [
    { title: "Cyber Security Basics", progress: 92, color: "#2FEA9B", gradient: "linear-gradient(to right, #2FEA9B, #7FDD53)" },
    { title: "Social Media Policies", progress: 89, color: "#2FEA9B", gradient: "linear-gradient(to right, #2FEA9B, #7FDD53)" },
  ];

  const combinedStrongestTopics = [
    ...strongestTopics, // Keep the original strongest topics
    ...additionalStrongestTopics, // Spread additional strongest topics
  ].filter(Boolean);

  return (
    <div className="main-component">
      <div className="bg-gray-100 p-4 sm:ml flex gap-2 flex-col lg:flex-row mt-14 dark:bg-gray-800">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-full lg:pl-80">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
            
            {/* Dashboard Metrics */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 text-2xl text-gray-400 dark:text-gray-500">
              {[ 
                { label: 'Active Users', value: activeUsers },
                { label: 'Questions Answered', value: questionsAnswered },
                { label: 'Avg. Session Length', value: avgSessionLength },
                { label: 'Starting Knowledge', value: startingKnowledge },
                { label: 'Current Knowledge', value: currentKnowledge },
                { label: 'Knowledge Gain', value: knowledgeGain },
              ].map((item, index) => (
                <div key={index} className="w-40 h-40 p-2 border rounded-lg text-black">
                  <h3 className="font-medium text-sm text-center mt-2">{item.label}</h3>
                  <p className="font-bold text-lg mt-4 text-center">{item.value}</p>
                </div>
              ))}
            </div>

            {/* BarChart Component */}
            <div className="flex items-center justify-center border rounded-lg w-full h-full p-4">
              <div className="flex flex-col w-full">
                <div className="flex justify-between p-2">
                  <span>Activity</span>
                  <select className="border-none" name="dropdown">
                    <option value="">Month</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                  </select>
                </div>
                <hr className="my-1" />
                <BarChart activityData={activityData} />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <TopicsList title="Weakest Topics" topics={weakestTopics} />
            <TopicsList title="Strongest Topics" topics={combinedStrongestTopics} />
          </div>

          {/* Group Leaderboard */}
          <div className='flex gap-4'>
            <div className="flex flex-wrap p-4 border rounded-lg mt-4 w-full">
            <table>
              <thead>
                <tr>
                  <th className="font-medium text-left p-4">User Leaderbord</th>
                </tr>
              </thead>
              <tbody>
                {individuals.map((individuals) => (
                  <tr key={individuals.name} className="flex justify-between p-2 items-center">
                    <td>{individuals.name}</td>
                    <td>{individuals.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap p-4 border rounded-lg mt-4  w-full">
            <table>
              <thead>
                <tr>
                  <th className="font-medium text-left p-4">Group Leaderboard</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group) => (
                  <tr key={group.name} className="flex justify-between p-2 items-center">
                    <td>{group.name}</td>
                    <td>{group.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
