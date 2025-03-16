# dnd-outdoor


## Backend
```bash
cd backend
fastapi dev main.py
```

Add a hero:
```bash
curl -X POST "http://localhost:8000/heroes/" \
     -H "Content-Type: application/json" \
     -d '{"name": "Superman", "age": 30, "secret_name": "Clark Kent"}'
```


## Frontend
```bash
cd frontend
npm install
npm run dev
```