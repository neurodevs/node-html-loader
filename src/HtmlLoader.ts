import { promises as fs } from 'fs'
import {
    AbstractFileLoader,
    FileLoader,
    FileLoaderOptions,
} from '@neurodevs/node-file-loader'

export default class HtmlLoaderImpl extends AbstractFileLoader<string> {
    public static Class?: HtmlLoaderConstructor

    public static Create(options?: FileLoaderOptions) {
        return new (this.Class || this)(options)
    }

    protected fileExtension = '.html'

    protected async loadFile() {
        return this.loadHtml()
    }

    private async loadHtml() {
        return await fs.readFile(this.path, 'utf8')
    }
}

export type HtmlLoader = FileLoader<string>

export type HtmlLoaderConstructor = new (
    options?: FileLoaderOptions
) => HtmlLoader
