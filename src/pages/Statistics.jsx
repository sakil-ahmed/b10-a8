import { Area, Bar, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts'
import { gadgets } from '../data/gadgets'

const Statistics = () => {
  const data = gadgets.map(item => ({
    name: item.product_title,
    price: item.price,
    rating: item.rating
  }))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Statistics</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Price vs. Product Name</h2>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={100} />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="price" fill="#8884d8" />
            <Area yAxisId="left" dataKey="price" fill="#8884d8" stroke="#8884d8" />
            <Scatter yAxisId="right" dataKey="rating" fill="#82ca9d" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Statistics