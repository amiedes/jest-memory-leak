# jest-memory-leak

How to run:

```bash
npm start
```

How to run tests:

```bash
NODE_OPTIONS=--experimental-vm-modules node \
  --expose-gc \
  ./node_modules/.bin/jest \
    --runInBand \
    --logHeapUsage \
    --no-cache
```

```bash
export TESTS_PATH="/Users/amiedes/dev/jest-memory-leak/__tests__"
for i in {1..20}
do; cp "${TESTS_PATH}/packages/math-service.test.js" "${TESTS_PATH}/oom/${i}.test.js"; done
```
