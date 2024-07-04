import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'UiHUigyEe8b22XPvdhPEQlUXHBEjjJSUQIihTPkUpmbEphpFQ8CQO8FrWyg6U416W1CnlYWNO7yxhs60Zf7XHA==',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [JwtStrategy],
  exports: [JwtModule, PassportModule],
})
export class AuthModule { }
