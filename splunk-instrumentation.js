
import SplunkOtelWeb from '@splunk/otel-web';
   SplunkOtelWeb.init({
     beaconUrl: 'https://rum-ingest.us0.signalfx.com/v1/rum',
     rumAuth: 'nF2sRwMTyB-is8WpcGQ72w',
     app: 'DemoJSWebApp',
   });