import axios from 'axios';

export default async function activeResource(req, res) {
  const axiosRes = await axios.get('http://localhost:3005/api/activeresource');
  const resource = axiosRes.data;

  return res.send(resource);
}
