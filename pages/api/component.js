export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { bin_id } = req.query;
    // Connect MongoDB or Firebase here to get component details
    // Example response:
    return res.json({
      bin_id,
      component_name: 'Resistor 10kΩ',
      shelf_location: 'Rack A, Shelf 3',
      quantity: 123
    });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
