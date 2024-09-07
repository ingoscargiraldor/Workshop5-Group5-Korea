const OpenAI = require('openai');

console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getCrossSellRecommendations(repuestos, marca, modelo) {
  console.log('Solicitando recomendaciones para:', repuestos, marca, modelo);
  const prompt = `Eres un experto en autopartes para vehículos coreanos. Un cliente está interesado en los siguientes repuestos para un ${marca} ${modelo}: ${repuestos}. Sugiere 2-3 productos adicionales relacionados que podrían interesarle al cliente para una venta cruzada. Proporciona una breve explicación de por qué cada producto adicional sería útil.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
    });

    console.log('Respuesta de OpenAI:', response.choices[0].message.content);
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error al obtener recomendaciones de OpenAI:', error);
    return 'No se pudieron generar recomendaciones en este momento.';
  }
}

module.exports = { getCrossSellRecommendations };
