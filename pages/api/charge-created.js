import axios from 'axios'

export default async (req, res) => {
  const instance = axios.create({
    baseURL: 'https://api.rechargeapps.com/',
    timeout: 3000,
    headers: {'X-Recharge-Access-Token': process.env.RECHARGE_ACCESS_TOKEN}
  });
  console.log(req.body.charge)
  // const scheduledDate = new Date(req.body.charge.scheduled_at)
  const response = await instance.post(`charges/${req.body.charge.id}/change_next_charge_date`, {
    next_charge_date: '2021-09-25'
  })
  return res.status(200).json("Updated")
}
