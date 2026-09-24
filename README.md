# YesMakr 💘

Fun interactive Yes/No question pages with dodging No buttons.

## Cloudflare Workers Deployment

### Prerequisites
- Node.js 18+
- A Cloudflare account
- `yesmakr.com` domain added to Cloudflare

### Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Build the static site
npm run build
# This produces the ./out directory

# 3. Deploy to Cloudflare Workers (manual)
npx wrangler deploy
```

### Cloudflare Dashboard Setup (GitHub Auto-Deploy)

1. **Create a GitHub repo** and push this code to it.

2. **Connect to Cloudflare:**
   - Cloudflare Dashboard → Workers & Pages → Create application → Connect to Git
   - Select your GitHub repo

3. **Configure Build Settings:**
   - Navigate to: Workers & Pages → yesmakr → Settings → Builds
   
   | Field | Value |
   |-------|-------|
   | **Build command** | `npm run build` |
   | **Deploy command** | `npx wrangler deploy` ⚠️ **CRITICAL** |
   | **Production branch** | `master` or `main` |

   > ⚠️ **The deploy command MUST be `npx wrangler deploy`**, not `npm run build`.
   > If set to `npm run build`, builds will succeed (green ✅) but the site never updates.

4. **Save and test** — push a commit, verify deployment shows "Production" label.

### wrangler.jsonc

The `name` field in `wrangler.jsonc` **must exactly match** your Worker name in the Cloudflare dashboard:

```jsonc
{
  "name": "yesmakr",           // ← Must match your Worker name exactly
  "compatibility_date": "2024-09-23",
  "assets": {
    "directory": "./out"       // ← Next.js static export output
  }
}
```

### Custom Domain (yesmakr.com)

After the Worker is deployed:
1. Cloudflare Dashboard → Workers & Pages → yesmakr → Settings → Domains & Routes
2. Add `yesmakr.com` as a custom domain
3. Cloudflare handles DNS automatically since the domain is already on Cloudflare

### Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Project Structure

```
yesmakr-cloudflare/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Animations & styles
│   ├── _components/        # Landing client component
│   ├── ask/                # Interactive question page
│   └── create/             # Customization page
├── lib/
│   └── templates.ts        # Templates, palettes, fonts config
├── public/                 # Static assets
├── wrangler.jsonc          # Cloudflare Workers config
├── next.config.js          # Static export config
├── tailwind.config.ts      # Tailwind CSS config
└── package.json
```
