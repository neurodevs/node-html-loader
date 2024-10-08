import { generateId } from '@sprucelabs/test-utils'
import { HtmlLoader } from '../HtmlLoader'

export default class FakeHtmlLoader implements HtmlLoader {
    public static callsToLoad: string[] = []
    private static fakedResponse: string = generateId()

    public static setFakedResponse(fakeResponse: string) {
        FakeHtmlLoader.fakedResponse = fakeResponse
    }

    public static getFakedResponse() {
        return FakeHtmlLoader.fakedResponse
    }

    public async load(path: string) {
        FakeHtmlLoader.callsToLoad.push(path)
        return this.fakedResponse
    }

    public get fakedResponse() {
        return FakeHtmlLoader.fakedResponse
    }
}
