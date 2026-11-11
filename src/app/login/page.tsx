import AuthForm from "../../../components/AuthForm";
import AuthLayout from "../../../components/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout
      mode="login"
      title="Iniciar Sesión"
      description="Ingresa tus credenciales para que se sincronicen tus contraseñas"
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}