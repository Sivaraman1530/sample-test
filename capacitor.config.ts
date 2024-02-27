import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'test.sample',
  appName: 'test-sample',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    extConfig: {},
    CapacitorUpdater: {
      "autoDeleteFailed": true,
      "autoDeletePrevious": true,
			"autoUpdate": false,
      "version":4.0,
      "defaultChannel": "production",
      privateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEAmZ+VeCez/5543okEtowTNVlplE3wMez9K5Za/wTft/876sl7\nbGx+drN5yz//AQflcZvalHfSdlHvyHKkR6Pg1h0+5rMW75kazue0pEwAeDqGTxk5\nU3i+r7Gswb+4BqrvpBjsK1hqQ7+Lit2jqvKx3n4ASsO1Q4EshT9SBXY464LQRdYv\nGgVJPMMuyuXh+nGkuU+e7JaCkv78u3iD5TzAos4zsK6y7f3AZrf7wVhF1p0cLW+l\nzEIOYghcLOO//Z0cDn8rUPIdDW0EcDDW8AHa64rgnmt5Iw2QK6aRdUspWHsnJns6\nC+B5CCphXl8LRtAYYwI8jRumncSbcUwpqPbsXQIDAQABAoIBACvUVgbD/RzvD7ke\nCpQyfsB31CGV4vO7k7e93BRqRZHvZh7kgSw8ABDJv/P3PEAFCrdRKhm13fwYAHuG\nCczOurUb/vg/HEobuoRRoz5E2NV0jSFAJxTjnDPwU0Or+UsdteVxnt/3B8pwedWS\nysFZINpDxL2P/MVXs2YI3NPmGPNIG+UgGSkXF/rZDw6fTqF426Yxo6pq9YJtkZhS\nl1fEh3zALs83nYnr86NREcp7jxkM00BhS4k5FcSguycIgnMah5B2iUsjOkEB0LQp\naTZc6b1CPrcnf3z01h8NF9F3bnhT5rfbM6ad1HHPEjTAm/8pUdf7xO+EZcCRjJQN\nAQ9H9RkCgYEA0UEh+OgD0aGrrh0p6xRGV5sxKka7vcnRNdlLHqFYTc1Y6xYkbhxW\naU03O/CoqJlK3dYf7nnTxu30ws/PGfVMW+q0Acx7685rlgX9HVtSamQGZWj49y/s\noZZiY/gx3iD/HxqbWmlfzjyysjN3j7sGWyvl+eoxrOvCbuJq8ab4B4sCgYEAu/EE\nFTXc+priytzMyZ/+mPP8o9rN0VXiHlFSHscHiTAZXcBSgep4I35Q5Y32poOPB14f\nRwTR6S3VVYNBszV0uN6ts6rKSu2DlbWOstIFSFtSeyKF4r2zYwP1I7uYn7IEPt6j\nuIHspk8aMyd4YZAmt3l2uEgmVi45vrth2NltmLcCgYEAsyHl2jWMZ13WIURYCSUf\nHon9KarJtyvYjBeLRhprBJeAwib/Yr+hfZ2bZhWb3FD2FTfjt/vUvpwgBtFtAlTK\nXHlsRYnun6viz9gqmYH+6JLeItwdHUaKdL3PVrM2xWhL3i2hxmEkoeG2O/TxKjq5\nszy+MBY7FkPw+4macWo1NAcCgYEAuzCsK2ARsD2yo/FVu4Cy+a8SNDWLh/PtmtrO\nWz9LXzXcHgefZiyd6mQ2uN00DNe+Ds2Ng5Pma0SuVlS8jH0yu6t3ARucDxMQW32R\nGsSaZF4pAeH5zkO5t2ZKtIN12aFaHzBriytFBMSGyOqIOUx1c4r0V0ntfSrfcvx5\n0Z2GTnMCgYEAxILdmX5J2EMlanqAAzsJsvmih7xsqO9Tf1UZ5Yhp1LpcoGDgX+6S\nVbm/AdBeA/FPX0ACHW7SIr0BmyOZraKJGT21aliYxpHkCofUeR7rb7JDTS7cFxvm\n/IKFjvbcclIK0Ttx76wCpVqtymqb0kEhBCrg/e8eqy+clfARTCsI+R0=\n-----END RSA PRIVATE KEY-----\n'
    }
  }
};

export default config;
