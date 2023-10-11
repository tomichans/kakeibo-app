import { ChangeEvent, useState } from 'react';
import { ILoginInfo } from '../../interfaces/AppLogin/interfaces';

export const useAppLogin = () => {
    //#region 変数関連

    /** ログイン情報デフォルト値 */
    const loginInfoDefault: ILoginInfo = {
        /** ユーザー名 */
        username: '',
        /** パスワード */
        password: '',
    };

    // ログイン情報
    const [loginInfo, setLoginInfo] = useState(loginInfoDefault);
    // ログイン成功/失敗判定
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    // ユーザー名正/誤判定
    const [isCorrectUsername, setIsCorrectUsername] = useState(false);
    // パスワード正/誤判定
    const [isCorrectPassword, setIsCorrectPassword] = useState(false);
    // 初期状態であるか判定
    const [isInit, setIsInit] = useState(true);

    //#endregion

    /**
     * 各テキストボックス更新時処理
     * @param e イベントハンドラ
     */
    const changeText = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    /**
     * ログインボタン押下時処理
     */
    const onClickLogin = () => {
        // 初期状態ではなくなる
        setIsInit(false);
        // ログイン情報の入力チェック
        setIsLoginSuccess(chackLoginInfo());
    };

    //#region チェック処理関連

    /**
     * ユーザー名のチェック処理
     * @returns true = チェックOK, false = チェックNG
     */
    const checkUsername = () => {
        return loginInfo.username?.length > 0;
    };

    /**
     * パスワードのチェック処理
     * @returns true = チェックOK, false = チェックNG
     */
    const checkPassword = () => {
        return loginInfo.password?.length > 0;
    };

    /**
     * ログイン情報のチェック処理
     * @returns true:チェックOK, false:チェックNG
     */
    const chackLoginInfo = () => {
        const isExistUserName = checkUsername();
        const isExistPassword = checkPassword();
        setIsCorrectUsername(isExistUserName);
        setIsCorrectPassword(isExistPassword);
        return isExistUserName && isExistPassword;
    };

    //#endregion

    return {
        loginInfo,
        isLoginSuccess,
        isCorrectUsername,
        isCorrectPassword,
        isInit,
        changeText,
        onClickLogin,
    };
};
