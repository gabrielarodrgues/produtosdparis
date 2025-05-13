import db from "@/lib/db";

export default async function ProdutosdParis() {
  const usuario = await db.query("select * from usuario");

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          height: "48px",
          backgroundColor: "#D9D9D9",
          padding: "0 9px",
          position: "relative", 
        }}
      >
        {/* Bola */}
        <div 
          style={{
            width: "43px",
            height: "42px",
            backgroundColor: "#B3B3B3",
            borderRadius: "50%",
            position: "absolute", 
            left: "1800px", 
          }}
        ></div>

        {/* Caixa de pesquisa */}
        <div
          style={{
            width: "300px",
            height: "30px",
            backgroundColor: "#ffffff",
            position: "absolute", 
            left: "800px", 
            borderRadius: "10%",
          }}
        ></div>
      </div>

      {/* Foto */}
      <div>
        <div
          style={{
            width: "100%",
            height: "250px",
            backgroundColor: "#1E1E1E",
          }}
        ></div>
      </div>
    </>
  );
}
