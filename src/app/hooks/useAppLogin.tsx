import { useState } from 'react'
import { ILoginInfo } from '../../interfaces/AppLogin/interfaces'

export const useAppLogin = () => {
    //#region 変数関連

    /** ログイン情報デフォルト値 */
    const ILoginInfoDefault: ILoginInfo = {
        /** ユーザー名 */
        username: '',
        /** パスワード */
        password: '',
    }

    // ログイン情報
    const [loginInfo, setFormValues] = useState(ILoginInfoDefault)
    // ログイン成功/失敗判定
    const [isLoginSuccess, setIsLoginSuccess] = useState(false)
    // ユーザー名正/誤判定
    const [isCorrectUsername, setIsCorrectUsername] = useState(false)
    // パスワード正/誤判定
    const [isCorrectPassword, setIsCorrectPassword] = useState(false)
    // 初期状態であるか判定
    const [isInit, setIsInit] = useState(true)

    //#endregion

    /**
     * 各テキストボックス更新時処理
     * @param e イベントハンドラ
     */
    const changeText = (e: any) => {
        const { name, value } = e.target
        setFormValues({ ...loginInfo, [name]: value })
    }

    /**
     * ログインボタン押下時処理
     * @param e イベントハンドラ
     */
    const onClickLogin = (e: any) => {
        // 初期状態ではなくなる
        const isInit = false
        setIsInit(isInit)
        // ログイン情報の入力チェック
        setIsLoginSuccess(chackLoginInfo())

        console.log(isInit)
        console.log(isLoginSuccess)
    }

    //#region チェック処理関連

    /**
     * 入力されたログイン情報のチェック処理
     * @returns true = チェックOK, false = チェックNG
     */
    function chackLoginInfo(): boolean {
        const correctUsername = checkUsername()
        const correctPassword = checkPassword()
        setIsCorrectUsername(correctUsername)
        setIsCorrectPassword(correctPassword)
        return correctUsername && correctPassword
    }
    /**
     * 入力されたユーザー名のチェック処理
     * @returns true = チェックOK, false = チェックNG
     */
    function checkUsername(): boolean {
        return loginInfo.username?.length > 0
    }
    /**
     * 入力されたパスワードのチェック処理
     * @returns true = チェックOK, false = チェックNG
     */
    function checkPassword(): boolean {
        return loginInfo.password?.length > 0
    }

    //#endregion

    return {
        loginInfo,
        isLoginSuccess,
        isCorrectUsername,
        isCorrectPassword,
        isInit,
        changeText,
        onClickLogin,
    }
}
