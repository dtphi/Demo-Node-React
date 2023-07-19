# Database use (https://app.supabase.com/projects) / region: Southeast/Singapore
## https://app.supabase.com/project/fvzsjcysvudvekanqars/building
org: dtphi'org
pss: &e7.mC4jPsZG8TP
name: demonode

## string connection
```bash
postgresql://postgres:[YOUR-PASSWORD]@db.fvzsjcysvudvekanqars.supabase.co:5432/postgres
```

## https://status.supabase.com/

# Prisma integration
```bash
npm install feathers-prisma --save
npm install prisma --save-dev
```
# https://app.supabase.com/project/fvzsjcysvudvekanqars/settings/database
## https://www.prisma.io/docs/reference/api-reference/command-reference
```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma db pull
```