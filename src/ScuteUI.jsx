import { Auth } from "@scute/ui-react";
import { useScuteClient, useAuth } from "@scute/react";
import { Profile } from "@scute/ui-react";

export const AuthenticatedView = () => {
  const { session, user, signOut } = useAuth();
  const scute = useScuteClient();

  if (session.status === "loading") {
    return null;
  } else if (session.status === "unauthenticated") {
    return <>unauthenticated</>;
  }

  return <Profile scuteClient={scute} language="en" />;
};

export const ScuteUI = () => {
  const { session } = useAuth();
  const scute = useScuteClient();

  if (session.status === "authenticated") {
    return <AuthenticatedView />;
  }

  return (
    <Auth
      scuteClient={scute}
      language="en"
      policyURLs={{
        privacyPolicy: "https://example.com/privacy",
        termsOfService: "https://example.com/terms",
      }}
      logoUrl="https://example.com/logo.png"
    />
  );
};
