import { Selector } from 'testcafe'

fixture`Index`
  .page`../src/index.html`

test('Should print hello world', async testCafe => {
  const helloWorld = Selector('#container h1')

  await testCafe
    .expect(helloWorld.exists).ok()
})

test('Should print hello world if we run the same test twice', async testCafe => {
  const helloWorld = Selector('#container h1')

  await testCafe
    .expect(helloWorld.exists).ok()
})
