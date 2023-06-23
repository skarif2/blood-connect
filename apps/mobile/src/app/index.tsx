import React from "react";
import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import { Trash } from "lucide-react-native";
import { Trans, useTranslation } from "react-i18next";

import { api, type RouterOutputs } from "~/utils/api";
import { LanguageToggle } from "~/components/LanguageToggle";
import { ThemeToggle } from "~/components/ThemeToggle";

const PostCard: React.FC<{
  post: RouterOutputs["post"]["all"][number];
  onDelete: () => void;
}> = ({ post, onDelete }) => {
  const router = useRouter();

  return (
    <View className="flex-1 flex-row items-center rounded-lg border border-border bg-card p-6 text-card-foreground">
      <View className="flex-grow">
        <TouchableOpacity onPress={() => router.push(`/post/${post.id}`)}>
          <Text className="space-y-1.5 text-xl font-semibold tracking-tight text-foreground">
            {post.title}
          </Text>
          <Text className="text-sm text-muted-foreground">{post.content}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Trash className="text-muted-foreground" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const CreatePost: React.FC = () => {
  const utils = api.useContext();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const { mutate, error } = api.post.create.useMutation({
    async onSuccess() {
      setTitle("");
      setContent("");
      await utils.post.all.invalidate();
    },
  });

  return (
    <View className="mt-4">
      <TextInput
        className="mb-2 rounded border border-input bg-secondary p-2 text-foreground"
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <Text className="mb-2 text-destructive">
          {error.data.zodError.fieldErrors.title}
        </Text>
      )}
      <TextInput
        className="mb-2 rounded border border-input bg-secondary p-2 text-foreground"
        value={content}
        onChangeText={setContent}
        placeholder="Content"
      />
      {error?.data?.zodError?.fieldErrors.content && (
        <Text className="mb-2 text-destructive">
          {error.data.zodError.fieldErrors.content}
        </Text>
      )}
      <TouchableOpacity
        className="rounded bg-accent p-2"
        onPress={() => {
          mutate({
            title,
            content,
          });
        }}
      >
        <Text className="font-semibold text-gray-100">Publish Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const Index = () => {
  const { t } = useTranslation();
  const utils = api.useContext();

  const postQuery = api.post.all.useQuery();

  const deletePostMutation = api.post.delete.useMutation({
    onSettled: () => utils.post.all.invalidate(),
  });

  return (
    <SafeAreaView className="h-full w-full bg-background">
      <Stack.Screen
        options={{
          headerTitleStyle: { color: "white" },
          headerTitle: t("plain_title"),
          headerRight: () => (
            <>
              <ThemeToggle />
              <LanguageToggle />
            </>
          ),
        }}
      />
      <KeyboardAvoidingView>
        <View className="h-full w-full p-4">
          <Text className="mx-auto pb-2 text-5xl font-bold tracking-tighter text-foreground">
            <Trans i18nKey="title">
              <Text className="text-accent">Blood</Text> Connect
            </Trans>
          </Text>
          <Text className="mx-auto pb-4 text-xl tracking-tighter text-foreground">
            {t("subtitle")}
          </Text>

          <Button
            onPress={() => void utils.post.all.invalidate()}
            title="Refresh posts"
            color={"#f47272"}
          />

          <View className="py-2">
            <Text className="font-semibold italic text-white">
              Press on a post
            </Text>
          </View>

          <FlashList
            data={postQuery.data}
            estimatedItemSize={20}
            ItemSeparatorComponent={() => <View className="h-2" />}
            renderItem={(p) => (
              <PostCard
                post={p.item}
                onDelete={() => deletePostMutation.mutate(p.item.id)}
              />
            )}
          />
          <CreatePost />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Index;
