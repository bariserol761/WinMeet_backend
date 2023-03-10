import { Keycloak } from 'keycloak-connect';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import {
  PolicyEnforcementMode,
  TokenValidation,
} from 'nest-keycloak-connect/constants';

// eslint-disable-next-line prettier/prettier
KeycloakConnectModule.register({
  authServerUrl: 'http://localhost:8080', // might be http://localhost:8080/auth for older keycloak versions
  realm: 'master',
  clientId: 'my-nestjs-app',
  secret: 'secret',
  policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
  tokenValidation: TokenValidation.ONLINE,
});

KeycloakConnectModule.registerAsync({
  useExisting: KeycloakConfigService,
  imports: [ConfigModule],
});
