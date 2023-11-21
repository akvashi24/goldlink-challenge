import Head from 'next/head'
import { PieChart } from 'react-minimal-pie-chart';



export default function Home() {

  // This would ideally live outside of this component in some universal design system 

  const theme = {
    pie: {
      purpleOne: '#855CF8',
      purpleTwo: '#E289F2',
      purpleThree: '#7879F1',
      purpleFour: '#B085FF',
    }
  }
    
  const tableData = [
    {strategy: 'Strategy 1', TVL: '$100,000', volatility: 'low', collateral: '$1,000', PNL: 100},
    {strategy: 'Strategy 1', TVL: '$100,000', volatility: 'medium', collateral: '$1,000', PNL: -100},
    {strategy: 'Strategy 1', TVL: '$100,000', volatility: 'low', collateral: '$1,000', PNL: 100},
    {strategy: 'Strategy 1', TVL: '$100,000', volatility: 'high', collateral: '$1,000', PNL: 100},
  ]

  // These ideally would be components organized by where they fit 
  
  const label = (color, text) => {
    console.log(color)
    return (
      <div className='flex flex-col items-center mx-4'>
      <div className={`rounded-full w-4 h-4 bg-[${color}] mb-2`}></div>
      <span>{text}</span>
    </div>
    )
  }

  const volatilityCell = (value) => {
    const theme = {low: 'purple-800', medium: 'purple-700', high: 'purple-600'}
    return (<div className={`px-2 py-1 rounded-full bg-${theme[value]} text-zinc-100`}>{value}</div>)
  }

  const PNLCell = (value) => {
    const color = value >= 0 ? 'text-green-500' : 'text-red-500'
    const attribute = value >= 0 ? '+' : '-'
    return (<span className={color}>{attribute}${value}</span>)
  }

  const tableRow = (row) => {
    return (
      <tr className='py-4 border-b'>
        <td className='py-4 border-b'>{row.strategy}</td>
        <td>{row.TVL}</td>
        <td>{volatilityCell(row.volatility)}</td>
        <td>{row.collateral}</td>
        <td>{PNLCell(row.PNL)}</td>
      </tr>
    )
  }

  const tableHeader = (text) => {
    return (
      <th className='font-semibold text-zinc-600 border-b border-zinc-300 py-4'>{text}</th>
      )
  }

  return (
    <div>
      <Head>
        <title>Next Starter by akvashi24</title>
        <meta name="description" content="Hand-made by Adin Vashi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen text-center bg-zinc-100 p-4">
        <div className='flex flex-row'>
          <section className='p-4 bg-white rounded-md drop-shadow-md flex-col flex mr-12'>
            <div className='flex flex-row justify-between mb-8'>
            <span>Lending Allocations</span>
            <span>$5000 USDC</span>
            </div>
            <div className='px-32 mb-12'>
              <PieChart
                data={[
                  { title: 'One', value: 10, color: theme.pie.purpleOne },
                  { title: 'Two', value: 15, color: theme.pie.purpleTwo },
                  { title: 'Three', value: 20, color: theme.pie.purpleThree },
                  { title: 'Three', value: 20, color: theme.pie.purpleFour },
                ]}
                />
            </div>
            <div className='flex flex-row justify-between px-16'>
              {label(theme.pie.purpleOne, 'Strategy 1')}
              {label(theme.pie.purpleTwo, 'Strategy 2')}
              {label(theme.pie.purpleThree, 'Strategy 3')}
              {label(theme.pie.purpleFour, 'Strategy 4')}
            </div>
          </section>
          <div className='p-4 bg-white rounded-md drop-shadow-md flex-col flex'>
            <div className='flex flex-row justify-between mb-8'>
            <span>Strategy Performance</span>
            </div>
            <div className='rounded-md border border-zinc-300'>
            <table className="table-fixed block">
              <col width="160px"/>
              <col width="160px"/>
              <col width="160px"/>
              <col width="160px"/>
              <col width="160px"/>
              <thead>
                <tr>
                  {tableHeader('Strategy')}
                  {tableHeader('TVL')}
                  {tableHeader('Volatility')}
                  {tableHeader('Collateral')}
                  {tableHeader('PNL')}
                </tr>
              </thead>
              <tbody>
                {tableData.map(tableRow)}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
