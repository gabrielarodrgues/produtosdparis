import db from "@/lib/db";

export default async function ProdutosdParis() {
  const usuario = await db.query("select * from usuario");

    return (
        <>
            <form method="post">
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="password"></input>
                    </div>
                    <div>
                        <button type="submit">Enviar</button>

                    </div>
            </form>
            
        </>
    );
}