const db = require('../config/db');

function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRad = value => (value * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// controllers/schoolController.js

exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, address, latitude, longitude]
    );
    res.status(201).json({ message: 'School added successfully', school: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;
  
  try {
    const results = await db.query('SELECT * FROM schools');
    // Rest of your distance calculation logic remains the same
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};