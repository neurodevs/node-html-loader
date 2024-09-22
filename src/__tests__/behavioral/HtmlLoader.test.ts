import { promises as fs } from 'fs'
import AbstractSpruceTest, { test, assert } from '@sprucelabs/test-utils'
import { FileLoaderOptions } from '@neurodevs/node-file-loader'
import HtmlLoaderImpl, { HtmlLoader } from '../../HtmlLoader'

export default class HtmlLoaderTest extends AbstractSpruceTest {
    private static actualPath: string
    private static expectedData: string

    private static loader: HtmlLoader

    protected static async beforeEach() {
        await super.beforeEach()

        this.actualPath = 'src/__tests__/testData/test.html'
        this.expectedData = await this.loadHtml(this.actualPath)

        this.loader = this.Loader()
    }

    @test()
    protected static async canCreateHtmlLoader() {
        assert.isTruthy(this.loader)
    }

    @test()
    protected static async loadsHtmlDataCorrectly() {
        const data = await this.load(this.actualPath)
        debugger
        assert.isEqualDeep(data, this.expectedData)
    }

    private static async loadHtml(path: string) {
        return await fs.readFile(path, 'utf8')
    }

    private static async load(path: string) {
        return await this.loader.load(path)
    }

    private static Loader(options?: FileLoaderOptions) {
        return HtmlLoaderImpl.Create(options)
    }
}
