import { useState, useEffect } from "react";
import type { Liturgy } from "../../types/liturgy.type";
import { fetchDailyLiturgy } from "../../services/liturgyService";

function LiturgyDisplay() {
  const [liturgy, setLiturgy] = useState<Liturgy | null>(null)
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const loadDailyLiturgy = async () => {
        const result = await fetchDailyLiturgy();
        if (result.success) {
            setLiturgy(result.data);
        } else {
            setMessage(result.error || "Erro desconhecido ao buscar órgãos julgadores.");
        }
    }

    loadDailyLiturgy();
  }, [])

  if (!liturgy) {
    return <div>Carregando liturgia...</div>;
  }

  return (
    <div>
      <h1>{liturgy.liturgia}</h1>
      <p>Data: {liturgy.data}</p>
      <p>Cor: {liturgy.cor}</p>
      <div>
        <h2>Primeira Leitura</h2>
        {liturgy.leituras.primeiraLeitura?.map((leitura, idx) => (
          <div key={`primeiraLeitura-${idx}`}>
            <p><strong>{leitura.referencia}</strong></p>
            <p>{leitura.texto}</p>
          </div>
        ))}
        <h2>Salmo</h2>
        {liturgy.leituras.salmo?.map((salmo, idx) => (
          <div key={`salmo-${idx}`}>
            <p><strong>{salmo.referencia}</strong></p>
            <p><em>{salmo.refrao}</em></p>
            <p>{salmo.texto}</p>
          </div>
        ))}
        <h2>Segunda Leitura</h2>
        {liturgy.leituras.segundaLeitura?.map((leitura, idx) => (
          <div key={`segundaLeitura-${idx}`}>
            <p><strong>{leitura.referencia}</strong></p>
            <p>{leitura.texto}</p>
          </div>
        ))}
        <h2>Evangelho</h2>
        {liturgy.leituras.evangelho?.map((leitura, idx) => (
          <div key={`evangelho-${idx}`}>
            <p><strong>{leitura.referencia}</strong></p>
            <p>{leitura.texto}</p>
          </div>
        ))}
        {liturgy.leituras.extras && liturgy.leituras.extras.length > 0 && (
          <div>
            <h2>Extras</h2>
            {liturgy.leituras.extras.map((extra, idx) => (
              <div key={`extra-${idx}`}>
                <pre>{JSON.stringify(extra, null, 2)}</pre>
              </div>
            ))}
          </div>
        )}
      </div>
      {message && <p className="error">{message}</p>}
    </div>
  )
}

export default LiturgyDisplay