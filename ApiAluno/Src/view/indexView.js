//Outra forma de fazer, sem ser por:
//module.exports = () => {
    // return `
  //  `
//}


const retornoTela = () => {
    const tela = (` 
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tela de login</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="estilo/estilo.css" />
  </head>
  <body>
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone image"
            />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  placeholder="Digite seu email:"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form1Example13">Email</label>
              </div>

              <!-- Senha input -->
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  placeholder="Digite sua senha:"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form1Example23">Senha</label>
              </div>

              <div
                class="d-flex justify-content-around align-items-center mb-4"
              >
                <!-- Checkbox -->
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label class="form-check-label" for="form1Example3">
                    Lembrar de mim
                  </label>
                </div>
                <a href="#!">Esqueceu a senha?</a>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-flex"
                style="justify-content: center; text-align: center"
              >
                Login
              </button>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OU</p>
              </div>

              <a
                class="btn btn-primary btn-lg btn-flex"
                style="
                  background-color: #3b5998;
                  text-align: center;
                  justify-content: center;
                "
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f me-2"></i>Continue com o Facebook
              </a>
              <a
                class="btn btn-primary btn-lg btn-block"
                style="background-color: #55acee"
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter me-2"></i>Continue com o Twitter</a
              >
            </form>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>


    
    `);
    return tela;
}
module.exports = retornoTela;