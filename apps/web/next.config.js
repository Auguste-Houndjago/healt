/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // Le build ne cassera pas si TS trouve une erreur
        ignoreBuildErrors: true,
      },
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'otteaxtfcbgfwdnzqesc.supabase.co',
                port:'',
                pathname:'/storage/v1/object/public/**'
            }
        ]
    }
};

export default nextConfig;
